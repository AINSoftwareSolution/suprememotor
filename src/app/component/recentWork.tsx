
const RecentWork = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                ['https://www.youtube.com/embed/WZw1GvEFyyI?si=tDiqWrW1XiGgexKQ', "https://www.youtube.com/embed/SACE1Z-FDXA?si=MBFpCRfBoL4QYALY",
                    "https://www.youtube.com/embed/Sf6Fg0Ew0Cc?si=sEB590dFhsQIbnaH", "https://www.youtube.com/embed/yZYvqyVtUk8?si=BFK0enK-YMlEbzGn",
                    "https://www.youtube.com/embed/-F6fdwh_T9c?si=cfVWYdWZ6ZFywDwD", "https://www.youtube.com/embed/GqWuHX81yv4?si=VxUvh6AUIUoGtQXg"
                ].map((link) => (
                    <iframe
                        key={link}
                        width="100%"
                        height="auto"
                        className="rounded-lg"
                        src={link}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />

                ))
            }
        </div>
    )
}

export default RecentWork