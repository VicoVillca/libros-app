import { Category } from "./categorie.model";
import { Tag } from "./tag.model";

export class Libro{
  constructor(
    public ID:string,
    public title:string,
    public author:string,
    public content:string,
    public content_short:string,
    public publisher:string,
    public publisher_date:string,
    public pages:string,
    public language:string,
    public url_details:string,
    public url_download:string,
    public cover:string,
    public thumbnail:string,
    public num_comments:string,
    public categories:Category[],
    public tags:Tag[]
  ){

  }
}
