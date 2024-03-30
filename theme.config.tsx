import { defineTheme, directory, link } from '@neato/guider/theme';
 
export default defineTheme({
  directories: [
    directory("main", { // ID of your directory (unique per site), used for referencing in your page files
      sidebar: [
        // Creates a link in your sidebar, add more below it
        link("Home", "/")
      ]
    })
  ],
});
