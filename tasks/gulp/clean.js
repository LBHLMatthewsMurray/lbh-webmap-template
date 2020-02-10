'use strict'

const gulp = require('gulp')
const del = require('del')

// Clean task for a specified folder --------------------
// Removes all old files, except for package.json
// and README in all package
// ------------------------------------------------------

gulp.task('clean', () => {
  const destination = "dist"

  return del([
    `${destination}/**/*`
  ])
})
