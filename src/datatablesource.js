export const userColumns = [
    {
        field: 'id', headerName: 'ID', width: 70
    },

    {
        field: 'user', headerName: 'User', width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>
            )
        }
    },

    {
        field: 'email', headerName: 'Email', width: 230
    },

    {
        field: 'age', headerName: 'Age', width: 100
    },

    {
        field: 'status', headerName: 'Status', width: 160,
        renderCell: (params) => {
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

export const userRows = [
    {
        id: 1,
        username: 'Snow',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "active",
        email: 'jon2022@gmail.com',
        age: 35
    },
    {
        id: 2,
        username: 'Lannister',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "passive",
        email: 'persei@gmail.com',
        age: 42
    },
    {
        id: 3,
        username: 'Jaimesa',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "pending",
        email: 'jaime007@gmail.com',
        age: 45
    },
    {
        id: 4,
        username: 'Stark',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "active",
        email: 'arya9119@gmail.com',
        age: 16
    },
    {
        id: 5,
        username: 'Targaryen',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "pending",
        email: 'daenery9@gmail.com',
        age: 42
    },
    {
        id: 6,
        username: 'Melisandre',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "active",
        email: "melisan67@gmail.com",
        age: 36
    },
    {
        id: 7,
        username: 'Clifford',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "passive",
        email: 'ferrara90@gmail.com',
        age: 44
    },
    {
        id: 8,
        username: 'Frances',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "active",
        email: 'rossini123@gmail.com',
        age: 36
    },
    {
        id: 9,
        username: 'Roxie',
        img: "https://images.pexels.com/photos/2657837/pexels-photo-2657837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        status: "passive",
        email: 'harvey23@gmail.com',
        age: 65
    },
]