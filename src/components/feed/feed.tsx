import { Photo } from "@/actions/photos-get";
import FeedPhotos from "./feed-photos";


export default  function Feed({photos}:{photos:Photo[]}) {

    return(
        <div className="container">
            <FeedPhotos photos={photos}/>
        </div>
    )
    
}