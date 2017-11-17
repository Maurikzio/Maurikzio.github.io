var gulp = require('gulp'),
less = require('gulp-less'),
browserSync = require('browser-sync'),
autoprefixer = require('gulp-autoprefixer'); 

// gulp.task('mytask', function() {
//     console.log('Привіт, я таск!');
// });

gulp.task('mytask', function () {
    return gulp.src('source-files')		// Вибірка вихідних файлів для обробки плагіном
        .pipe(plugin())					// Виклик Gulp плагіна для обробки файла
        .pipe(gulp.dest('folder'))		// Вивід результуючого файла в папку призначення (dest - пункт призначення)
});


gulp.task('browser-sync', function(){
browserSync({
    server:{
        baseDir: 'app'
    },
    notify: false
});
});

gulp.task('less', function() {						// Створюємо таск "less"
return gulp.src('app/less/**/*.less')			// Беремо всі less файли з папки less і дочірніх, якщо є
    .pipe(less())								// Перетворюємо Less в CSS за допомогою gulp-less
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Створюємо префікси
    .pipe(gulp.dest('app/css'))					// Вивантажуємо результат в папку app/css
    .pipe(browserSync.reload({stream: true}))	// Оновлюємо CSS на сторінці при зміні
});

gulp.task('watch', ['browser-sync', 'less'], function() {
    gulp.watch('app/less/**/*.less', ['less']);			// Нагляд за less файлами у папці less
    gulp.watch('app/*.html', browserSync.reload);		// Нагляд за HTML файлами у корені проекта
    gulp.watch('app/js/**/*.js', browserSync.reload);	// Нагляд за JS файлами у папці js
});