const favicon_images = ["fav/ezgif-7-1b62dc0dd148-jpg/ezgif-frame-001.jpg"];
    
for (let i = 2; i < 11; i++)
    {
        favicon_images.push("fav/ezgif-7-1b62dc0dd148-jpg/ezgif-frame-00"+i+".jpg");
    }    
for (let i = 11; i < 73; i++)
    {
        favicon_images.push("fav/ezgif-7-1b62dc0dd148-jpg/ezgif-frame-0"+i+".jpg");
    }  

image_counter = 0; // To keep track of the current image

setInterval(function() {
    // remove current favicon
    if(document.querySelector("link[rel='icon']") !== null)
        document.querySelector("link[rel='icon']").remove();
    if(document.querySelector("link[rel='shortcut icon']") !== null)
        document.querySelector("link[rel='shortcut icon']").remove();
        
    // add new favicon image
    document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image">');
    
    // If last image then goto first image
    // Else go to next image    
    if(image_counter == favicon_images.length -1)
        return process.abort();
    else
        image_counter++;
    }, 50);