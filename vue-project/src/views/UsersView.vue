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
              <form  @submit.prevent="addUser">
                <div class="card-body">
                  <div class="mb-4">
                    <label class="form-label" for="name">Name</label>
                    <input class="form-control" v-model="name" id="name" type="text">
                    <div class="form-text">The name is how it appears on your site.</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="city">City</label>
                    <input class="form-control" v-model="city" id="city" type="text">
                    <div class="form-text">The “city” where you were born and live.</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="email">Email</label>
                    <input class="form-control" v-model="email" id="email" type="email">
                    <div class="form-text">The "email" where people can contact you.</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="phone">Phone#</label>
                    <input class="form-control" v-model="phone" id="phone" type="number">
                    <div class="form-text">Your personal phone number.</div>
                  </div>
                  <div class="mb-4">
                    <label class="form-label" for="status">Status</label>
                    <select class="form-select" v-model="status" id="status" >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                    <div class="form-text">Your status for whatever you want.</div>
                  </div>
                  <button class="btn btn-primary mb-4">Add User</button>
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
                    <th data-sortable="" style="width: 22.5187%;"><a href="#" class="dataTable-sorter">Name</a></th>
                    <th data-sortable="" style="width: 24.5659%;"><a href="#" class="dataTable-sorter">City</a></th>
                    <th data-sortable="" style="width: 21.7876%;"><a href="#" class="dataTable-sorter">Email</a></th>
                    <th data-sortable="" style="width: 20.0329%;"><a href="#" class="dataTable-sorter">Phone#</a></th>
                    <th data-sortable="" style="width: 20.0329%;"><a href="#" class="dataTable-sorter">Status</a></th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user) in users">
                      <td><span class="form-check"><input class="form-check-input" type="checkbox"></span></td>
                      <td><a href="javascript:void(0)" class="text-decoration-none text-reset fw-bolder">{{ user.name }}</a></td>
                      <td>{{ user.city }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.phone }}</td>
                      <td class="text-base"> <span class="badge badge-danger-light">{{ user.status }}</span></td>
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

<script>
  export default {
    data() {
      return {
        users: [
          {
            "name" : "Jahanzaib",
            "city" : "Wah Cantt",
            "email" : "jahanzaibkhan239@gmail.com",
            "phone" : "+92 4308665",
            "status" : "Active"
          },
          {
            "name" : "Saad",
            "city" : "Lahore",
            "email" : "saad1212@gmail.com",
            "phone" : "+92 5338665",
            "status" : "Inactive"
          },
          {
            "name" : "Hamza",
            "city" : "Usman Khattar",
            "email" : "hamza@gmail.com",
            "phone" : "+92 7538665",
            "status" : "Active"
          },
          {
            "name" : "Hassan",
            "city" : "Lahore",
            "email" : "hassan@gmail.com",
            "phone" : "+92 9309725",
            "status" : "Active"
          }
        ]
      }
    },
    methods: {
      addUser(){
        var new_user = {
          name : this.name,
          city : this.city,
          email : this.email,
          phone : this.phone,
          status : this.status
        }
        this.users.push( new_user );

      }
    }


  }

</script>
