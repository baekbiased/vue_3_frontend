<template>
  <div class="page-holder bg-gray-100"  >
    <div class="container-fluid px-lg-4 px-xl-5">
      <!-- Page Header-->
      <div class="page-header">
        <h1 class="page-heading">Users</h1>
      </div>
      <section>
        <div class="row mb-5">
          <div class="col-lg-4">
            <div class="card mb-4 mb-lg-0">
              <form @submit.prevent="addUser" ref="userForm" >
                <div class="card-body">
                  <div class="mb-4">
                    <label class="form-label" for="name">Name</label>
                    <input v-model="id" hidden>
                    <input class="form-control" v-model="name" id="name" type="text" v-bind:style= "[error.name ? {'border-color': '#dc3545'} : '']">
                    <div class="error-msg">{{ error.name }}</div>

                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="city">City</label>
                    <input class="form-control" v-model="city" id="city" type="text" v-bind:style= "[error.city ? {'border-color': '#dc3545'} : '']">
                    <div class="error-msg">{{ error.city }}</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" v-model="email" id="email" type="text" v-bind:style= "[error.email ? {'border-color': '#dc3545'} : '']">
                    <div class="error-msg">{{ error.email }}</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="phone">Phone#</label>
                    <input class="form-control" v-model="phone" id="phone" type="text" v-bind:style= "[error.phone ? {'border-color': '#dc3545'} : '']">
                    <div class="error-msg">{{ error.phone }}</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="status">Status</label>
                    <select class="form-select" v-model="status" id="status" v-bind:style= "[error.status ? {'border-color': '#dc3545'} : '']">
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <div class="error-msg">{{ error.status }}</div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <button type="submit" class="btn btn-primary mb-4" v-if="this.id">Update</button>
                      <button type="submit" class="btn btn-primary mb-4" v-else @click="addUser">Add User</button>
                    </div>
                    <div class="col-6" style="text-align: right">
                      <button type="button" @click="clearForm" class="btn btn-primary mb-4">Clear</button>
                    </div>
                  </div>

                </div>
              </form>

            </div>
          </div>
          <div class="col-lg-8">
            <div class="card card-table">
              <div class="preload-wrapper opacity-10">
                <div class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns"><div class="dataTable-top"><div class="dataTable-dropdown"><span class="me-2" id="categoryBulkAction">
                      <select class="form-select form-select-sm d-inline w-auto mb-1 mb-lg-0" name="categoryBulkAction">
                        <option>Bulk Actions</option>
                        <option>Delete</option>
                      </select>
                      <button class="btn btn-sm btn-outline-primary align-top mb-1 mb-lg-0">Apply</button></span><label><select class="dataTable-selector form-select form-select-sm"><option value="5">5</option><option value="10" selected="">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option></select> entries per page</label></div><div class="dataTable-search"><input class="dataTable-input form-control form-control-sm" placeholder="Search..." type="text"></div></div><div class="dataTable-container border-0"><table class="table table-hover mb-0 dataTable-table" id="categoryDatatable">
                  <thead>
                  <tr>
                    <th style="width: 11.1131%;" data-sortable="false"> </th>
                    <th>Id</th>
                    <th style="width: 22.5187%;">Name</th>
                    <th style="width: 24.5659%;">City</th>
                    <th style="width: 21.7876%;">Email</th>
                    <th style="width: 20.0329%;">Phone#</th>
                    <th style="width: 20.0329%;">Status</th>
                    <th style="width: 20.0329%;"><a >Action</a></th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr @dblclick="getUser(user)" v-for="(user) in users">
                      <td><span class="form-check"><input class="form-check-input" type="checkbox"></span></td>
                      <td>{{ user.id }}</td>
                      <td><a href="javascript:void(0)" class="text-decoration-none text-reset fw-bolder">{{ user.name }}</a></td>
                      <td>{{ user.city }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                      <td class="text-base"><span v-bind:class="[user.status=='Active' ? ['badge', 'badge-success-light'] : ['badge', 'badge-danger-light']]">{{ user.status }}</span></td>
                      <td><button type="button" @click="removeUser(user)" class="delete-btn"><span class="badge badge-danger-light">Delete</span></button></td>
                    </tr>
                  </tbody>
                </table></div><div class="dataTable-bottom"><div class="dataTable-info">Showing 1 to {{ users.length }} of {{ users.length }} entries</div><nav class="dataTable-pagination"><ul class="dataTable-pagination-list"></ul></nav></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 text-center text-md-start fw-bold">
            <p class="mb-2 mb-md-0 fw-bold">Your company © 2021</p>
          </div>
          <div class="col-md-6 text-center text-md-end text-gray-400">
            <p class="mb-0">Version 1.1.0</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
  .error-msg {
    color : #dc3545;
    text-align: right;
    margin-top: 5px;
  }
  .delete-btn {
    border: none;
    background: transparent;
  }
</style>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, email } from '@vuelidate/validators'

  export default {
    setup:  () => ({ v$: useVuelidate() }),

    data: () => {
      return {
        error: {
          name : null,
          city : null,
          email : null,
          phone : null,
          status : null,
        },

        id : null,
        name : null,
        city : null,
        email : null,
        phone : null,
        status : null,

        users: [
          {
            "id" : "1",
            "name" : "Jahanzaib",
            "city" : "Wah Cantt",
            "email" : "jahanzaibkhan239@gmail.com",
            "phone" : "+92 4308665",
            "status" : "Active"
          },
          {
            "id" : "2",
            "name" : "Saad",
            "city" : "Lahore",
            "email" : "saad1212@gmail.com",
            "phone" : "+92 5338665",
            "status" : "Inactive"
          },
          {
            "id" : "3",
            "name" : "Hamza",
            "city" : "Usman Khattar",
            "email" : "hamza@gmail.com",
            "phone" : "+92 7538665",
            "status" : "Active"
          },
          {
            "id" : "4",
            "name" : "Hassan",
            "city" : "Lahore",
            "email" : "hassan@gmail.com",
            "phone" : "+92 9309725",
            "status" : "Active"
          }
        ]
      }
    },

    validations () {
      return {
        name : { required },
        city : { required },
        email : { required, email },
        phone : { required },
        status : { required }
      }
    },

    methods: {
      addUser(e){
        e.preventDefault()

        // this.v$.$touch()
        this.v$.$validate()

        if(!this.v$.$error){
          if(this.id){
            this.users.map((user) => {
              if(this.id == user.id){
                user.name = this.name
                user.city = this.city
                user.email = this.email
                user.phone = this.phone
                user.status = this.status
              }
            });
          }
          else{
            var new_user = {
              id : (this.users.length)+1,
              name : this.name,
              city : this.city,
              email : this.email,
              phone : this.phone,
              status : this.status
            }
            this.users.push( new_user );
            console.log('Added Successfully');
          }

          this.clearForm();
        }
        else{
          console.log("failed")
          if(this.v$.name.$error){
            console.log("Name is Required!")
            this.error.name = "Name is Required!"
          }else{
            this.error.name = ''
          }

          if(this.v$.city.$error){
            console.log("City is Required!")
            this.error.city = "City is Required!"
          }else{
            this.error.city = ''
          }

          if(this.v$.email.$error){
            console.log("Email is Required!")
            this.error.email = "Email is Required!"
          }else{
            this.error.email = ''
          }

          if(this.v$.phone.$error){
            console.log("phone is Required!")
            this.error.phone = "phone# is Required!"
          }else{
            this.error.phone = ''
          }

          if(this.v$.status.$error){
            console.log("Status is Required!")
            this.error.status = "Status is Required!"
          }else{
            this.error.status = ''
          }

        }
      },

      getUser(user){
        console.log(user)
        this.id = user.id
        this.name = user.name
        this.city = user.city
        this.email = user.email
        this.phone = user.phone
        this.status = user.status

      },

      removeUser(user){
        console.log(user)
        this.users.splice(this.users.indexOf(user), 1);

      },

      clearForm(){
        this.id = ''
        this.name = ''
        this.city = ''
        this.email = ''
        this.phone = ''
        this.status = ''
        this.error.id = ''
        this.error.name = ''
        this.error.city = ''
        this.error.email = ''
        this.error.phone = ''
        this.error.status = ''
      },

    }

  }

</script>
