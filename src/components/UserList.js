import React, { useEffect, useState, useCallback } from 'react'
// import { Card, Table, InputGroup, Button, FormControl } from 'react-bootstrap'

import { Card, Table, InputGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

const UserList = () => {

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage, setUsersPerPage] = useState(10)
    const [pageNo, setPageNo] = useState(0)

    const lastIndex = currentPage * usersPerPage;
    const firstIndex = lastIndex - usersPerPage;
    const currentUsers = users.slice(firstIndex, lastIndex);
    // const totalPages = users.length / usersPerPage;
    const totalPages = pageNo;
    const [isLoading, setIsLoading] = useState(true)

    const pageNumCss = {
        width: "45px",
        border: "1px solid #17A2B8",
        color: "#17A2B8",
        textAlign: "center",
        fontWeight: "bold"
    };


    // useEffect(() => {
    //     findAllRandomUsers();
    // }, [])

    const fetchData = useCallback(async () => {
        const data = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${usersPerPage}`);
        const responseData = await data.json();
        setUsers(responseData.data);
        setPageNo(responseData.totalPages)
        setIsLoading(false)
      }, [currentPage, isLoading])

    useEffect(() => {
        fetchData()
        // make sure to catch any error
        .catch(console.error);;

        // findAllRandomUsers();
    }, [ fetchData])

    // const findAllRandomUsers = async () => {
    //     // https://api.instantwebtools.net/v1/passenger?page=0&size=10 
    //     // axios.get("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
    //     //     .then(response => response.data)
    //     //     .then((data) => {
    //     //         console.log(data);
    //     //         setUsers(data)
    //     //     });

    //     console.log("api call")
    //     const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${usersPerPage}`)
    //     const responseData = await response.json();
    //     setUsers(responseData.data)
    //     setPageNo(responseData.totalPages)
    //     setIsLoading(false)
    //     // axios.get(`https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=${usersPerPage}`)
    //     //     .then(response => response.data)
    //     //     .then((data) => {
    //     //         console.log(data);
    //     //         setUsers(data.data)
    //     //         setPageNo(data.totalPages)
    //     //         setIsLoading(false)
    //     //     });
    // }

    // function findAllRandomUsers() {}

    const changePage = event => {
        event.target.value = event.target.value ? setCurrentPage(parseInt(event.target.value)) : 0;
        // if(isNaN(event.target.value)){
        //     console.log("object")
        //     setCurrentPage(0)

        // }else{
        //     console.log("nai")
        //     setCurrentPage(parseInt(event.target.value))
        // }

    };

    const firstPage = () => {
        if (currentPage > 1) {
            setCurrentPage(1)
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    };

    const lastPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(totalPages)
            setIsLoading(true)
        }
        // if (currentPage < Math.ceil(users.length / usersPerPage)) {
        //     setCurrentPage(Math.ceil(users.length / usersPerPage))
        // }
    };

    // const nextPage = () => {
    //     if (currentPage < Math.ceil(users.length / usersPerPage)) {
    //         setCurrentPage(currentPage + 1)
    //     }
    // };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
            setIsLoading(true)
        }
    };

    if (isLoading) return (<h1>Loading</h1>)

    return (
        <div>
            <Card className={"border border-dark bg-dark text-white mt-4"}>
                <Card.Header> User List</Card.Header>
                <Card.Body>
                    <Table bordered hover striped variant="dark">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Address</td>
                                <td>Created</td>
                                <td>Balance</td>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length === 0 || isLoading ?
                                <tr align="center">
                                    <td colSpan="6">No Users Available</td>
                                </tr> :
                                users.map((user, index) => (
                                    <tr key={index}>
                                        {/* <td>{user.first}{' '}{user.last}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.created}</td>
                                        <td>{user.balance}</td> */}

                                        <td>{user.name}</td>
                                        <td>{user.trips}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>

                </Card.Body>
                <Card.Footer>
                    <div style={{ "float": "left" }}>
                        Showing Page {currentPage} of {totalPages}
                    </div>

                    <div style={{ "float": "right" }}>

                        <InputGroup size="sm">

                            <InputGroup.Prepend>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={firstPage}
                                >
                                    First
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                    onClick={prevPage}
                                >
                                    Prev
                                </Button>
                            </InputGroup.Prepend>

                            <FormControl style={pageNumCss} className={"bg-dark"} name="currentPage" value={currentPage}
                                onChange={changePage}
                            />
                            <InputGroup.Append>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={nextPage}
                                >
                                    Next
                                </Button>
                                <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                    onClick={lastPage}
                                >
                                    Last
                                </Button>
                            </InputGroup.Append>

                        </InputGroup>
                    </div>
                </Card.Footer>
            </Card>

        </div>
    )
}

export default UserList
