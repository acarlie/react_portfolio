var bg = {
    setBg: function() {
        let pattern = Trianglify({
            width: window.innerWidth,
            height: window.innerHeight,
            cell_size: 80,
            variance: "0.89",
            x_colors: ["#FFA9DC", "#F3CAFF", "#EB6087", "#E0004D", "#8F1368"]
        });
        pattern.canvas(document.getElementById('canvas-basic'));
    }
}
  