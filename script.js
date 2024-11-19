// console.log('hello')
// cookie
// giá trị trong cookie không thể ghi đè và chỉ 1 khóa có một giá trị, muốn tạo khóa có tên đã tồn tại phải xóa cookie cũ
// document.cookie = `name=huy; expires=${new Date('2024-09-07 12:00:00').toUTCString()}`;
// document.cookie = `age=19; expires=${new Date('2024-09-07 12:00:00').toUTCString()}`;
// console.log(document.cookie)

// giá trị trong localStorage có thể ghi đè
// vẫn có thể truy xuất dữ liệu ở các tab khác mặc dù code đã được comment
// localStorage.setItem('name', 'huy')
// localStorage.setItem('age', 19)
// localStorage.setItem('name', 'phuc')
// console.log(localStorage.getItem('name'))
// localStorage.removeItem('age')
// localStorage.clear()

//Session Storage
// không thể truy xuất dữ liệu ở các tab khác, khi comment lại code thì dữ liệu sẽ không được lưu như localStorage
// sessionStorage.setItem('name', 'huy')
// sessionStorage.setItem('age', 20)

// filter, find, map, reduce
const obj = [
    {
        name: 'huy',
        age: 18
    },
    {
        name: 'phuc',
        age: 20
    },
    {
        name: 'phuoc',
        age: 18
    },
    {
        name: 'dung',
        age: 19
    },

]
// filter lọc tất cả các phần tử
const filarr = obj.filter((user) => {
    return user.age === 18

})
// find chỉ lọc được phần tử đầu tiên
const findarr = obj.find((user) => {
    return user.age === 18
})
// map tạo ra một mảng mới
const maparr = obj.map((user) => {
    return user.age
})
const maparr1 = obj.map((user) => {
    return user.name + 'dz'
})
// reduce dùng để biến đổi kiểu dữ liệu array thành object hoặc object thành array
// chuyển từ array về object
const reducarr = obj.reduce((acc, cur) => {
    return { ...acc, [cur.name]: cur }
}, {})
// chuyển từ object về array
const reducarr1 = Object.values(reducarr).reduce((acc, cur) => {
    return [...acc, cur]
}, [])
const reducarr2 = Object.values(reducarr).reduce((acc, cur) => {
    return [...acc, cur.name]
}, [])
console.log(filarr, findarr)
console.log(maparr)
console.log(maparr1)
console.log(reducarr)
console.log(reducarr1)
console.log(reducarr2)
const arr = [1, 2, 3, 4]
let tong = 0;
for (let i = 0; i < arr.length; i++) {

    tong += arr[i]
}
let tong1 = 0;
console.log('tong', tong)
arr.forEach(element => {
    tong1 += element

});
console.log('tong1', tong1)