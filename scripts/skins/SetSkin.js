/**
 *
 * @param {String} id ID of skin in "datalist"
 * @param {String} skin New skin
 */
export default function (id, skin) {
    document.getElementById(id).data = `graphics/${skin}`
}
