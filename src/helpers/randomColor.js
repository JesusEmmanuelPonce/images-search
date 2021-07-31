const randomColor = () => {

    const colors = ["#FF2323", "#FF8023", "#1DC41A", "#23ACFF", "#2376FF", "#8E23FF", "#FF23D7"];
    const index = Math.floor(Math.random() * 7);

    return colors[index];
        
};

export default randomColor;
