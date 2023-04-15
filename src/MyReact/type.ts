export interface Props {
    [key: string]: any;
    children: MyReactElement[];
    nodeValue?: string;
}

export interface MyReactElement {
    type: string;
    props: Props;
}