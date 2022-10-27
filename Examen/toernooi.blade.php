@extends('layout.beheer')

@section('title', 'Toernooi')

@section('head')
    @parent

@stop

@section('content')

    <div class="container">
        <div class="row">
            <h1 class="col">Toernooien beheer</h1>
            <a href="/create_toernooi" class="btn btn-primary col-lg-4"><h2>Toevoegen</h2></a>
        </div>
    </div>
<br>
    
        <div class="row">

            @foreach ($data as $toernooi)
            <?php 
                        $temp = explode(' ',$toernooi->date_time);
            ?>
            <div class="col-sm-4">
                <div class="card mb-3">
                    <div class="card-body">
                    <h4 class="card-title">{{ $toernooi->title }}</h4>
                    <p class="card-text"><h6> Datum:  {{ $temp[0] }} </h6></p>
                    <p class="card-text"><h6> Tijd:  {{ $temp[1] }}</h6></p>
                    <p class="card-text"><h6> Aantal spelers:  {{ $toernooi->number_of_players }}</h6></p>
                    <p class="card-text"><h6> Beschikbare plekken:  {{ $toernooi->number_of_available_places }}</h6></p>
                    <p class="card-text"><h6> Inschrijfkosten:  {{ $toernooi->registration_price }} euro</h6></p>
                        <div class="row d-flex justify-content-center justify-content-around">
                            <a href="toernooi/{{ $toernooi->id }}/edit" class="btn btn-primary col-lg-5">Wijzigen</a>
                            <a href="delete_toernooi/{{ $toernooi->id }}" class="btn btn-danger col-lg-5">Verwijderen</a>
                        </div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
@stop
