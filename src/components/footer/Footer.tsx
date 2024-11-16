const Footer = () => {
    const github = 'Jao_dire';
    
    return (
        <footer className="bg-gray-200 p-4 text-center text-sm w-full mt-auto">
            <p className="text-gray-600 text-sm">
                Desenvolvido por{' '}
                <a href="https://github.com/Joao-Dire"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-700"></a>

            </p>
        </footer>
    )

}

export default Footer;