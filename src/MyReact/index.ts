import { Props, MyReactElement } from './type';

/**
 * @param type 元素类型：div、TEXT_ELEMENT
 * @param props 属性
 * @param children 子元素
 * @returns jsx 对象
 */
function createElement(
    type: string,
    props: Props,
    ...children: (MyReactElement | string)[]
) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child: any) => {
                return typeof child === 'object' ? child : createTextElement(child)
            })
        }
    }
}

/**
 * 
 * @param text 节点名称
 * @returns 文本节点的jsx对象
 */
function createTextElement(text: string) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    }
}

/**
 * 
 * @param element jsx 元素
 * @param container 挂载的容器
 */
function render(element: MyReactElement, container: HTMLElement | Text) {
    const dom = element.type === 'TEXT_ELEMENT'
        ? document.createTextNode('')
        : document.createElement(element.type);

    const isProperty = (key: string) => key !== 'children';

    Object.keys(element.props)
        .filter(isProperty)
        .forEach((key: string) => {
            dom[key] = element.props[key];
        })

    element.props.children.forEach((child: MyReactElement) => {
        render(child, dom);
    })

    container.appendChild(dom);
}

export default {
    createElement,
    render
}