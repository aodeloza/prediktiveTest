import { expect } from '@wdio/globals'
import LandingPage from '../pageobjects/landing.page'
import landingPage from '../pageobjects/landing.page'

describe('DuckDuckGo Search Test', () => {

    // const expectedHeaders = [
    //     "Android | Haz más con Google en teléfonos y dispositivos Android",
    //     "Android - Wikipedia, la enciclopedia libre",
    //     "Android | Do More With Google on Android Phones & Devices",
    //     "¿Qué es Android? - Xataka Android",
    //     "Android 15: novedades, móviles compatibles y todo lo ... - Xataka Android",
    //     "Ayuda de Android - Google Help",
    //     "Android 16 es la gran versión de Android para el próximo 2025",
    //     "Qué es Android: todo sobre el sistema operativo de Google - ADSLZone",
    //     "Android - Qué es, características y ventajas | Muy tecnológicos",
    //     "¿Qué es Android? Todo lo que necesita saber - SoftwareLab",
    //     "¿No encuentras lo que buscas?",
    //     "Android",
    //     "Obtener nuestro navegador para Mac"
    // ];
    
    it('should search display results', async () => {
        await LandingPage.open()

        await LandingPage.searchForText("android")


               // Locate all header elements (h1, h2, h3)
               const headers = await $$('h2');

               // Filter headers containing "Android" (case-insensitive)
               const matchingHeaders = [];
               for await (const header of headers) {
            const headerText = await header.getText()
            if (headerText.toLowerCase().includes('android')) {
                matchingHeaders.push("Android")
            }
        }
       
        // Log the matching headers
        console.log('Headers containing "Android":', matchingHeaders);

        // Assert that at least one header contains "Android"
        await expect(matchingHeaders.length).toBeGreaterThan(0);

        // Optional: Assert that all elements in matchingHeaders are "Android"
        for (const header of matchingHeaders) {
            await expect(header).toContain("Android");
        }
    })

    it('should verify that All Regions modal has more than 10 elements', async () => {
        
        await landingPage.allRegionsClick()
        await landingPage.waitForAllRegionOption()

        const regionElements = await ((await landingPage.getRegionCount()).length)
        console.log(regionElements)



        // Step 4: Assert that total count is greater than 10
        expect(regionElements).toBeGreaterThan(10);
    });
})

