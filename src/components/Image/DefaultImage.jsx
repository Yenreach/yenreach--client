import React from 'react'

const DefaultImage = ({ business_name, className }) => {
    const [res, setRes] = React.useState(null)

    function generateColor (){
        const colors = ['#ecb731','#537bc4','#ff4500','#162221','#666666','#355ebe','#0732a2','#8aba56','#40b3ff']
        const colors2  = [{"bg": '#EBE6EF',"col": "#AB133E"}, {"bg": '#FFF7E0',"col": "#935F10"}, {"bg": '#D8E8F3',"col": "#222A54"}, {"bg": '#E0E6EB',"col": "#2D3A46"}, {"bg": '#FFF7E0',"col": "#935F10"}, {"bg": '#E7F9F3',"col": "#216E55"}, {"bg": '#E6DFEC',"col": "#37364F"}, {"bg": '#FFEBEE',"col": "#BD0F2C"}, {"bg": '#EEEDFD',"col": "#4409B9"}, {"bg": '#EAEFE6',"col": "#69785E"}, {"bg": '#E2F4E8',"col": "#363548"}, {"bg": '#ECE1FE',"col": "#192251"}, {"bg": '#E8DEF6',"col": "#420790"}, {"bg": '#FDF1F7',"col": "#973562"}]
        const c = Math.floor(Math.random() * colors.length);
        const col = colors2[c];
        return col;
        }
        
    function cleaner(name) {
        let clean = "";
        // console.log(name, "name")
        const splt = name?.split("");
        splt?.forEach(char => {
                if (char.match(/[a-zA-Z]/)) {
                    clean = clean + char;
                }
            }
        );
        return clean;
    }

    function setBusinessImage(business_name) {
        let res = "";
        const color = generateColor();
        const name = business_name.trim();
        // console.log("name", name, "color", color)
        if (name.includes(' ')) {
            const exploded = name?.split(' ');
            const clean1 = cleaner(exploded[0]); 
            const clean2 = cleaner(exploded[1]); 
            const res1 = clean1.slice(0,1).toUpperCase();
            const res2 = clean2.slice(0,1).toUpperCase();
            res = res1 + res2;  // Two char
        } else {
            const clean = cleaner(name); 
            res = clean.slice(0,2).toUpperCase();  // Two char
        }

        if (res){
            return {name: res, color };
        }
        else {
            return null;
        } 
    }

    React.useEffect(() => {
        setRes(setBusinessImage(business_name))
    }, [])

  return (
    <div className={`${className} w-full h-full flex justify-center items-center text-wrap text-uppercase text-4xl bg-[${res?.color?.bg}] text-[${res?.color?.col}]`} style={{color: res?.color?.col, background: res?.color?.bg}}>
        {res?.name}
    </div>
  )
}

export default DefaultImage

