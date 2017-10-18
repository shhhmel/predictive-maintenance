<template>
    <div id="app">
        <v-navbar></v-navbar>
        <div class="container-fluid mt-1">
            <div class="row row-offcanvas row-offcanvas-right">
                <div class="col-6 col-md-3 sidebar-offcanvas" id="sidebar">
                    <v-sidebar></v-sidebar>
                </div>

                <div class="col-12 col-md-9">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#db" role="tab" aria-controls="home" aria-expanded="true">DASHBOARD</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#ah" role="tab" aria-controls="profile">ASSET HEALTH</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#wo" role="tab" aria-controls="profile">WORK ORDEES</a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="db" role="tabpanel" aria-labelledby="db-tab">...</div>
                        <div class="tab-pane fade" id="ah" role="tabpanel" aria-labelledby="ah-tab">
                            <div class="card mt-2">
                                <div class="card-header">
                                    Asset overview -- Master station 1-1
                                </div>
                                <div class="card-body">
                                    <ul class="nav nav-tabs" id="myTabInCard" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link" id="home-tab" data-toggle="tab" href="#ev" role="tab" aria-controls="home" aria-expanded="true">EVENTS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#ps" role="tab" aria-controls="profile">POSITION</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#tt" role="tab" aria-controls="profile">TRAVEL TIME</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" id="tpr-tab" data-toggle="tab" href="#tpr" role="tab" aria-controls="profile">TORQUE PROFILE</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#wor" role="tab" aria-controls="profile">WORK ORDERS</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#aa" role="tab" aria-controls="profile">ALARM ANALYTICS</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myCardTabContent">
                                        <div class="tab-pane fade show" id="ev" role="tabpanel" aria-labelledby="ev-tab">...</div>
                                        <div class="tab-pane fade show" id="ps" role="tabpanel" aria-labelledby="ps-tab">...</div>
                                        <div class="tab-pane fade show active clearfix" id="tpr" role="tabpanel" aria-labelledby="tpr-tab">
                                            <h2>Open</h2>
                                            <v-chart :height="300" :direction="'Open'"></v-chart>

                                            <h2>Close</h2>
                                            <v-chart :height="300" :direction="'Close'"></v-chart>
                                        </div>
                                        <div class="tab-pane fade show" id="tt" role="tabpanel" aria-labelledby="tt-tab">...</div>
                                        <div class="tab-pane fade show" id="wor" role="tabpanel" aria-labelledby="wor-tab">...</div>
                                        <div class="tab-pane fade show" id="aa" role="tabpanel" aria-labelledby="aa-tab">...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="wo" role="tabpanel" aria-labelledby="wo-tab">...</div>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
    </div>
</template>

<script>

export default {
    name: 'app'
}
</script>

<style>
</style>
