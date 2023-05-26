
class Utils {
    static framed = (tabo) => {
        let tab = [...tabo];
        for(let i=0,c=tab.length;i<c;i++) {
            tab[i] = String('\'').concat(tab[i],'\'');
        }
        return tab;
    }
}
module.exports = Utils