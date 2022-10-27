@extends('layout.master')

@section('title', 'Page Title')

@section('head')
    @parent
    <!-- image preloading for this page -->
    <link rel="prefetch" href="{{ asset("includes/img/PUG.jpg") }}" as="image">
@stop

@section('content')
    <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
            <div class="row">
                <div class="col-lg-5 d-none d-lg-flex">
                    <div class="flex-grow-1 bg-register-image" style="background-image: url({{ asset("includes/img/PUG.jpg") }});"></div>
                </div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h4 class="text-dark mb-4">Create an Account!</h4>
                        </div>
                        <form class="user" method="POST" action="{{ route('register') }}">
                            @csrf
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input class="form-control form-control-user" type="text" placeholder="First Name" name="firstname" required>
                                </div>
                                <div class="col-sm-6">
                                    <input class="form-control form-control-user" type="text" placeholder="Last Name" name="lastname" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input class="form-control form-control-user" type="email" aria-describedby="emailHelp" placeholder="Email Address" name="email" required>
                                </div>
                                <div class="col-sm-6">
                                    <input class="form-control form-control-user" type="tel" placeholder="Telephone number" name="telephone" required>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input class="form-control form-control-user" type="text" placeholder="Street" name="street" required>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input class="form-control form-control-user" type="text" placeholder="House number" name="house_number" required>
                                </div>
                                <div class="col-sm-6">
                                    <input class="form-control form-control-user" type="text" placeholder="Postal code" name="postal_code" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input class="form-control form-control-user" type="text" placeholder="City" name="city" required>
                                </div>
                                <div class="col-sm-6">
                                    <input class="form-control form-control-user" type="text" placeholder="Country" name="country" required>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input class="form-control form-control-user" type="password" placeholder="Password" name="password" required>
                                </div>
                                <div class="col-sm-6">
                                    <input class="form-control form-control-user" type="password" placeholder="Repeat Password" name="password_confirmation" required>
                                </div>
                            </div>
                            <button class="btn btn-primary d-block btn-user w-100" type="submit">
                                Register Account
                            </button>
                            <hr>
                        </form>
                        <div class="text-center">
                            <a class="small" href="/forgot-password">
                                Forgot Password?
                            </a>
                        </div>
                        <div class="text-center">
                            <a class="small" href="/login">
                                Already have an account? Login!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@stop
