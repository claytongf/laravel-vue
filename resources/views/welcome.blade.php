<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="{{mix('css/app.css')}}">
        <meta name="csrf-token" content="{{csrf_token()}}">
    </head>
    <body>
        <div id="app" class="flex-center position-ref full-height">
            <vue-snotify></vue-snotify>
            <preloader-component></preloader-component>
            <router-view></router-view>
        </div>
        <script src="{{mix('/js/app.js')}}"></script>
    </body>
</html>
