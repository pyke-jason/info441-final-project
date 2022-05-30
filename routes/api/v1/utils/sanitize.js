// Adapted 
function escapeHtml(unsafe)
{
    if(!unsafe){
        return undefined;
    }
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }

 export default escapeHtml;