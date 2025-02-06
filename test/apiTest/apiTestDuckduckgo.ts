import axios from 'axios';
import { describe, it } from 'mocha';

describe('Fetch DuckDuckGo Icon URL', () => {
    it('should fetch the icon URL and print it if available', async () => {
        const url: string = 'https://api.duckduckgo.com/?q=android&format=json';
        
        try {
            const response = await axios.get(url);
            
            if (response.data) {
                console.log('Fetched Data:', JSON.stringify(response.data, null, 2));
            }
            
            const iconUrl: string | undefined = response.data?.Image || response.data?.Icon?.URL;
            
            if (iconUrl) {
                console.log(`Icon URL: https:${iconUrl}`);
            } else {
                console.log('No icon URL found.');
            }
        } catch (error: any) {
            console.error(`Failed to fetch data: ${error.message}`);
        }
    });
});