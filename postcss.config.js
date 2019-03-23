module.exports = ({ file, options, env }) => {
    return {
        plugins: {
            autoprefixer: {"env": env},
            cssnano: env === 'production' ? {} : false
        }
    };
}