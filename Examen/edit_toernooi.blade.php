@extends('layout.beheer')

@section('title', 'Page Title')

@section('head')
    @parent

@stop

@section('content')
<div class="container-fluid">
            <h1> Toernooi wijzigen </h1>

        @foreach ($data as $toernooi)
            <form method="POST" action="/toernooi/{{$toernooi->id}}" enctype='multipart/form-data'>
                @csrf
                @method('PUT')
                <?php 
                  $temp = explode(' ',$toernooi->date_time);
                ?>

            <div class="card" style="width: 60%; position: absolute; left: 0; right: 0; margin: auto;">
            <div class="card-body">

            <div class="mb-3">
                    <label class="form-label" for="title">Titel</label>
                    <input class="form-control" type="text"  name="input_title" id="input_title" value="{{$toernooi->title}}">
                    </div>
                <div class="row">
                <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="date">Datum</label>
                    <input placeholder="Selected date" type="date" id="input_date" name="input_date" class="form-control datepicker" value="{{ $temp[0] }}">
                </div>
                </div>
                <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="time">Tijd</label>
                    <input placeholder="Selected time" type="time" id="input_time" name="input_time" class="form-control timepicker" value="{{ $temp[1] }}">
                    </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="number_of_players">Aantal spelers</label>
                    <input class="form-control" type="text"  name="input_number_of_players" id="input_number_of_players" value="{{$toernooi->number_of_players}}">
                </div>
                </div>
                <div class="col">
                <div class="mb-3">
                    <label class="form-label" for="number_of_available_places">Beschikbare plekken</label>
                    <input class="form-control" type="text"  name="input_number_of_available_places" id="input_number_of_available_places" value="{{$toernooi->number_of_available_places}}">
                    </div>
                </div>
                </div>
                
                <div class="mb-3">
                    <label class="form-label" for="registration_price">Inschrijfkosten</label>
                    <input class="form-control" type="text"  name="input_registration_price" id="input_registration_price" value="{{$toernooi->registration_price}}">
                </div>
                <button type="submit" class="btn btn-primary w-50">Wijzigen</button>
                </div>
        </div>
            </form>
         @endforeach
        </div>
@stop