import  {fs, path, Suspect} from './shared.js';

const apiUrl = 'https://api.fbi.gov/wanted/v1/list';
const folderPath = "./JSON FILES";
let allItems = [];
let suspectList = [];

export async function fetchAllPages() {
    let totalPages = 52;

    try {
        for (let i = 1; i <= totalPages; i++) {
            //API CALL
            //The FBI API is does not allow for many API calls before it throws a "429 Too Many Requests Error"
            //Our code first attempts to pull as many JSON files as possible from the API

            if (!response.ok) {
                //However any page it cannot grab from the API it will grab from the folder "JSON FILES". 
                //Our program satisfies the API pull requirement while also supplementing our website with additional calls. 
                //We talked with a TA (Hted Oo) and he said this was okay.
                const response = await fetch(`${apiUrl}?page=${i}`);
                console.error(`Error fetching page ${i}:`, response.status, response.statusText);
            
                const targetFileName = `list${i}.json`; 
            
                try {
                    const files = await fs.readdir(folderPath);
            
                    const file = files.find(f => f === targetFileName);
                    if (file) {
                        const filePath = path.join(folderPath, file);
            
                        try {
                            const data = await fs.readFile(filePath, 'utf8');
                            const jsonData = JSON.parse(data);
            
                            if (jsonData.items) {
                                jsonData.items.forEach(item => {
                                    const suspect = new Suspect(item);
                                    suspectList.push(suspect);
                                });
                            } else {
                                console.warn(`No "items" property found in ${file}.`);
                            }
                        } catch (err) {
                            console.error(`Error reading or parsing file ${file}:`, err);
                        }
                    } else {
                        console.warn(`No file found in "JSON FILES" matching page number ${i}.`);
                    }
            
                } catch (err) {
                    console.error('Error reading folder:', err);
                }
            
                continue;
            }
            
            const data = await response.json();
            allItems = allItems.concat(data.items);
        }
        console.log("Fetched!");
        
        allItems.forEach(item => {
            //console.log(item.title);
            const suspect = new Suspect(item);
            suspectList.push(suspect);
        });
        
    } catch (error) {
        console.error('Error fetching FBI wanted data:', error);
    }

    console.log('Number of suspects: ' + suspectList.length);
    return suspectList;
}

