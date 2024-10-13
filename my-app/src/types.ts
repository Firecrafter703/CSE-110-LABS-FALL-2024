export enum Label
{
    personal = "personal",
    study = "study",
    work = "work",
    other = "other",
}

export type Note = 
{
    id:number;
    title:string;
    content:string;
    label:Label;
    button:string;
    //sont have to use immage, visualize like butoon

    //favorite as parameter
    //use state update the note

    //setNotes-array of Notes
    //setSelectNode
    //use State(update seteSeelectedNode)
};
