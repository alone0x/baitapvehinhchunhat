function Hinhchunhat(x, y, cd, cr) {
    this.x = x;
    this.y = y;
    this.cd = cd;
    this.cr = cr;
    this.dienTich = function Tinhdientich() {
        return x * y;
    };
    this.chuVi = function Tinhchuvi() {
        return (x + y) * 2
    };
}

function CraetHcn() {
    ctx = document.getElementById("canvas").getContext("2d");
    let x = ranDomcanh();
    let y = ranDomcanh();

    let cd = ranDomcanh();
    let cr = ranDomcanh();
    let hcn = new Hinhchunhat(x, y, cd, cr);
    //ctx.fillRect(0, 0, 50, 50);
    ctx.fillRect(hcn.x,hcn.y,hcn.cd, hcn.cr)

}

function ranDomcanh() {
    x = Math.floor(Math.random() * 400);
    console.log(x);
    return x;

}

CraetHcn();