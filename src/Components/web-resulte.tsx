type WebPage = {
    id: string,
    name: string,
    url: string,
    thumbnailUrl: string,
    isFamilyFriendly: boolean,
    displayUrl: string,
    snippet: string,
     dateLastCrawled: Date,
    language: string,
    isNavigationalW: boolean
}
type RelatedSearch = {
    text:string,
    displayText: string, 
    webSearchUrl: string
}
type WebResultProps = {
    results: WebPage[],
    similar: RelatedSearch[]
}
const WebResults = ({results=[], similar=[]}:WebResultProps) => {
    return (
        <div className="web-results">
           {similar.length > 0 ? <div className="similar">
                <h3 style={{padding: '0 16px'}}>People also searched for</h3>
                <ul>
                    {similar.map((sim, i) => (i < 4 ? <li><a href={sim.webSearchUrl}>{sim.displayText}</a></li>: null))}
                </ul>
            </div>
            : null}
           <ul>
                {results.map(r => (
                    <li key={r.id}>
                        <a style={{fontWeight: 'bold', display: 'flex', alignItems: "center", marginBottom: 8}} href={r.displayUrl}>{r.thumbnailUrl ? <img style={{marginRight: 16}} src={r.thumbnailUrl} alt="thumbnail" width={64} /> : null} {r.name}</a>
                        <span>{r.snippet}</span>
                    </li>
                ))}
           </ul>
        </div>
    )

}
export default WebResults;