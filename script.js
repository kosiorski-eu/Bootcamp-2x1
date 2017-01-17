if(!(String.prototype.repeatt))
{
    String.prototype.repeatt = function repeatt(number)
    {
        var tekst="";
        for(var i=0;i<number;i++)
        {
            tekst = tekst +  this;
        }
        return tekst;
    }
 }
$('#tekst').text("Przykład - ".repeatt(4));

















