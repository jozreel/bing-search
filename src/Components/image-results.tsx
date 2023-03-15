type ImageResult = {

        webSearchUrl: string,
        name: string,
        thumbnailUrl: string,
        datePublished: Date,
        contentUrl: string,
        hostPageUrl:string,
        contentSize: string,
        encodingFormat: string,
        hostPageDisplayUrl: string,
        width: Number,
        height: Number,
        thumbnail: any
}
type ImageResultsProps = {results: ImageResult[]}
const ImageResults = ({results=[]}:ImageResultsProps) => {
        console.log(results);
        return (<div className="image-results">
                {results.map((im, i) => (
                        
                                <a key={i} href={im.hostPageUrl}><img height={192} src={im.thumbnailUrl} alt={im.name} style={{height: 192, maxWidth: 192}} /></a>
                
                ))}
        </div>)

}

export default ImageResults;