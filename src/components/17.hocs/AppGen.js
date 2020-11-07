import React from 'react';
import './App.css';

// HOC
import ApiCallsHOC from './components/17.hocs/ApiCallsHOC'
import PostsList from './components/17.hocs/PostsList'
import TaskList from './components/17.hocs/TasksList'
import UsersList from './components/17.hocs/UsersList'

const PostsListComponent = ApiCallsHOC(PostsList, 'https://jsonplaceholder.typicode.com/posts')
const TodosListComponent = ApiCallsHOC(TaskList, 'https://jsonplaceholder.typicode.com/todos')
const UsersListComponent = ApiCallsHOC(UsersList, 'https://jsonplaceholder.typicode.com/users')

function AppGen() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <h1>We're working with HOC's</h1>
          <UsersListComponent />
          <TodosListComponent />
          <PostsListComponent />
        </>
      </header>
    </div>
  );
}

export default AppGen