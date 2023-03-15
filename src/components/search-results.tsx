import { useState } from "react";
import ImageResults from "./image-results";
import WebResults from "./web-resulte";

type SearchResultsProps = {
    data: any
};
const SearchResults = ({data}: SearchResultsProps) => {
    const [vieww, setView] = useState<string>('W');

    const togleView = (v: string) => {
        setView(v);
    }

    return data ? <div>
        {data.queryContext?.alteredQuery ? <div style={{padding: '16px 32px', fontSize: 18}}>
            Showing results for {data.queryContext.alteredQuery} instead of {data.queryContext.originalQuery};
        </div> :null}
        <div className="categories">
            <button style={{marginRight: 4}} onClick={_=>togleView('W')}>Web</button>
            <button onClick={_=>togleView('I')}>Images</button>
        </div>
            <div style={{padding: 16}}>
                {vieww === 'W' ? <WebResults results={data.webPages?.value} similar={data.relatedSearches?.value} />:<ImageResults results={data.images?.value} />}
            </div>
        
        
    </div>: null;
}

export default SearchResults;