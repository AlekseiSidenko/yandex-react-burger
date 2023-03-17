export type TElement = {
    readonly _id: string,
    readonly name: string,
    readonly price: number,
    readonly image: string,
    readonly image_large: string,
    readonly image_mobile: string,
    readonly type: string,
    readonly calories: number,
    readonly carbohydrates: number,
    readonly fat: number,
    readonly proteins: number,
    readonly __v: number,
    readonly uid: string,
    index: number
}

// export type TElementUid = TElement & {
//     readonly uid: string,
// }

export type TStateElements = {
    draggedElements: [TElement],
    bunsPrice: number,
    elementsPrice: number
}

export type TOrderOptions = {
    [key: string]: string
}

export type TStateOrder = {
    orderRequest: boolean,
    orderFailed: boolean,
    popupVisible: boolean,
    order: TOrderOptions
}