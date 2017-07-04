import React, { Component } from 'react'
import { connect } from 'dva'
import { Table, Pagination, Popconfirm } from 'antd';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    deleteHandler(id) {
      console.warn(`TODO: ${id}`);
    }
    render() {
        !this.props.loading && console.log(this.props.data)
        const columns = [
          {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="">{text}</a>
          },
          {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
          },
          {
            title: 'Website',
            dataIndex: 'website',
            key: 'website'
          },
          {
            title: 'Opretion',
            key: 'opretion',
            render: (text, { id }) => (
              <span>
                <a href="">Edit</a>
                <Popconfirm title="Confirm to delete?" onConfirm={this.deleteHandler.bind(null, id)}>
                  <a href="">Delete</a>
                </Popconfirm>
              </span>
            )
          }
        ]
        if (this.props.loading == false) {
          var dataSource = this.props.data.data;
  
        }

        return (
            <div>
              <Table
                columns={columns}
                dataSource={dataSource}
                rowKey={record => record.id}
                pagination={false}
              />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { 
    data: state.app,
    loading: state.loading.models.app
  }
}


export default connect(mapStateToProps)(Products)
