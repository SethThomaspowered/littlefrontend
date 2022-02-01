export class Book {
    private id: number;
    private title: string;
    private description: string;
    private image: string;
    private googleId: string;
    private author: string;
    constructor (id: number, title: string, description: string, image: string, googleId: string, author: string){
        this.id=id;
        this.title=title;
        this.description=description;
        this.image=image;
        this.googleId=googleId;
        this.author=author;
    }  
    };
