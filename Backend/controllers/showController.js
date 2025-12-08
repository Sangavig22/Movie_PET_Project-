import axios from 'axios';
import Movie from '../models/Movie.js';
import Show from '../models/show.js';

// API to get now playing movies from TMDB
export const getNowPlayingMovies=async(req,res)=>{

    try{
       const { data}=await axios.get('https://api.themoviedb.org/3/movie/now_playing',{
        headers:{
            Authorization:`Bearer ${process.env.TMDB_API_KEY}`}
       })
       const movies=data.results;
       res.json({success:true,movies:movies})
    }
    catch(error){
        console.error(error)
        res.json({success:false,message:error.message})

    }
}

// API to add a new show to the database
export const addshow=async(req,res)=>{
    try{
        const{movieId,showInput,showPrice}=req.body;

        let movie=await Movie.findById(movieId);

        if(!movie){
            //fetch movie details and credits from TMDB API
            const [movieDetailResponse,movieCreditResponse]=await Promise.all([
                axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}}),

            axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`,{
                    headers:{Authorization:`Bearer ${process.env.TMDB_API_KEY}`}})
            ]);

            const movieApiData=movieDetailResponse.data;
            const movieCreditsData=movieCreditResponse.data;

            const movieDetails={
                _id:movieId,
                title:movieApiData.title,
                overview:movieApiData.overview,
                poster_path:movieApiData.poster_path,
                backdrop_path:movieApiData.backdrop_path,
                genres:movieApiData.genres,
                casts:movieCreditsData.cast,
                release_date:movieApiData.release_date,
                original_language:movieApiData.original_language,
                tagline:movieApiData.tagline || " ",
                vote_average:movieApiData.vote_average,
                runtime:movieApiData.runtime,
            }
            //Add movie to database
            movie=await Movie.create(movieDetails);
        }

        const showToCreate=[];
        showInput.forEach(show=>{
            const showDate=show.date;
            show.time.foreach((time)=>{
                const dateTimeString=`${showDate}T${time}`;
                showToCreate.push({
                    movie:movie._id,
                    showTime:new Date(dateTimeString),
                    showPrice,
                    occupiedSeats:{}
            })

        })
    });
    if(showToCreate.length>0){
        await Show.insertMany(showToCreate);
    }
    res.json({success:true,message:"Show added successfully"});

    
    
}catch(error){
        console.error(error);
        res.json({success:false,message:error.message});
    }
}

//API to get all shows from the database
export const getShows=async(req,res)=>{

    try{
        const shows=await Show.find({showDateTime:{$gte:new Date()}}).populate('movie').sort({showDateTime:1});

        //filter unique show
        const uniqueShows=new Set(shows.map(show=>show.movie))

        res.json({success:true,shows:Array.from(uniqueShows)})
    }catch(error){
        console.error(error);
        res.json({success:false,message:error.message});
    }
}
//API to get a single show from the database
export const getShow=async(req,res)=>{
    try{
        const{movieId}=req.params;
        //get all upcoming shows for the movie
        const shows=await Show.find({movie:movieId,showDateTime:{$gte:new Date()}});

        const movie=await Movie.findById(movieId);
        const dateTime={};
        shows.forEach(show=>{
            const data=show.showDateTime.toISOString().split('T')[0];

        if(!dateTime[data]){
            dateTime[data]=[];
        }
        dateTime[data].push({time:show.showDateTime,showId:show._id})
    })

    res.json({success:true,movie,dateTime});
} catch(error){
    console.error(error);
    res.json({success:false,message:error.message});
}
}