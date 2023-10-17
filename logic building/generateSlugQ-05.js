// Input: "Hello World"
// Output: "hello-world.com"
// Input: "AlmaBetter Web Dev"
// Output: "almabetter-web-dev.com"

function generateSlug(title){
    let s=title.toLowerCase();
    s=s.replace(/\s/g,'-')+".com";
    return s;
}
console.log(generateSlug("AlmaBetter Web Dev"));