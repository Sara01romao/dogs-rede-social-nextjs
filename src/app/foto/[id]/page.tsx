import photoGet from "@/actions/photo-get"
import PhotoContent from "@/components/photo/photo-content";
import { notFound } from "next/navigation";

type FotoIdParams ={
    params:{
        id:string
    }
}

export async function generateMetadata({params}:FotoIdParams){
    const {data} = await photoGet(params.id);

    if(!data) return {title: 'Fotos'};
    return{
        title: data.photo.title
    };
}

export default async function FotoIdPage({params}:FotoIdParams) {
    
    const {data} = await photoGet(params.id)
    
    if(!data) return notFound();
    return (
        <section className="container mainContainer">
            <PhotoContent data={data} single={true}/>
            
        </section>
    )
    
}