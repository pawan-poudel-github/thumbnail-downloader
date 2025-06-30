
const Layout = ({ children }: { children: Readonly<React.ReactNode> }) => {
    return (
        <>
            <div className="container mx-auto px-8 py-8 rounded-xl my-10 bg-gradient-to-br from-primary/10 to-primary/15 ">
                {children}
            </div>
        </>
    )
}
export default Layout