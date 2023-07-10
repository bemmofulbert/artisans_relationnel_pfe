
export class ArtDashboardSidebarItemModel {
    public icon:string;
    public title:string;
    public selected:Boolean;
    public id:string;
  
    constructor(icon:string = "assets/img_side_item/house.svg",title:string="Accueil",selected:Boolean=false,id=''){
      this.icon = icon;
      this.title = title;
      this.selected = selected;
      this.id = id;
    }
  }