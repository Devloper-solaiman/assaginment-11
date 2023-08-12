import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import ItemsRow from './ItemsRow';

const ManageItems = () => {
    const Item = useLoaderData()
    const [ItemsManage, setItemsManage] = useState(Item)
    const handleDelete = Items => {
        fetch(`http://localhost:5000/userproduct/${Items._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then(data => {
                console.log(data)
                if (data.isConfirmed) {
                    Swal.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    const ReItems = ItemsManage.filter(usr => usr._id !== Items._id)
                    setItemsManage(ReItems)
                    toast(`All information of ${Items.name}  Shafiqul Islam has been deleted`)
                }
            })

    }
    return (
        <div>

            <div className="hero my-10 overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Supliar Name</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ItemsManage.map(ItemsR => <ItemsRow
                                key={ItemsR._id}
                                ItemsR={ItemsR}
                                handleDelete={handleDelete}
                            ></ItemsRow>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;