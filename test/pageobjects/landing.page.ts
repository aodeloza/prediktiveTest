import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get searchBox () {
        return $('[id=searchbox_input]');
    }

    public get searchButton () {
        return $('[class="searchbox_iconWrapper__suWUe"]');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get allRegionButton() {
        return $('[class="sG3VWKPgDjJAlSrJSoLP"]')
    }

    public get allRegionsOption(){
        return $('[class="fdosLIuRgrWo7SyeqSUb"]')
    }

    public get regionCount(){
        return $('[class="IrVYRCUvYQ98h_9Xp7aN undefined"]')
    }

    /**
     * getRegionCount - counts Region List
     */

        public async getRegionCount (){
            return await this.regionCount.getText()
        }

    /**allRegionsClick
     * Method to click all regions dropdown
     */
    public async allRegionsClick () {
        
        await this.allRegionButton.waitForDisplayed({timeout:5000});
        await this.allRegionButton.click();
    }

    /**
     * waitForAllRegionOption - it waits for element to be displayed
     */

    public async waitForAllRegionOption (){
        await this.allRegionsOption.waitForDisplayed({timeout:5000})
    }

    /**
     * method to search for a text at landing page
     * @param {string} text 
     */
    public async searchForText (text: string) {
        await this.searchBox.setValue(text);
        await this.searchButton.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LandingPage();
