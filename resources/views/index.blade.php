<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta property="og:image" content={{ Storage::disk('public')->url('images/domixi.png') }}>
    <meta property="og:image:secure_url" content={{ Storage::disk('public')->url('images/domixi.png') }}>
    <meta property="og:image:width" content="3506">
    <meta property="og:image:height" content="2040">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:alt" content="Đây là ảnh thumbnail">
    <meta property="og:title" content="Đây là tiêu đề">
    <meta property="og:url" content="https://core.hoangkhacphuc.online">
    <meta property="og:description" content="Đây là một trang web được xây dựng bằng Laravel và Vite">
    <meta property="og:site_name" content="Đây là tên trang web">
    <meta property="og:type" content="website">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    @vite(['resources/js/main.js'])
</body>
</html>
