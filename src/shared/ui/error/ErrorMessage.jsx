import React from 'react';
import styles from "./ErrorMessage.module.css";
//
// const ErrorMessage = ({error}) => {
//     return (
//         <div className="app">
//             <div className="no-results">
//                 <p>error fetching data, error: ${error?.message ?? "Unknown error"}</p>
//             </div>
//         </div>
//     );
// };
//
// export default ErrorMessage;



const ErrorMessage = ({
                          title = "Something went wrong",
                          message = "We couldn’t load the data right now.",
                          onRetry,
                          variant = "page",
                      }) => {

    const wrapperClassName =
        variant === "section"
            ? `${styles.wrapper} ${styles.section}`
            : `${styles.wrapper} ${styles.page}`;

    return (
        <section className={wrapperClassName}>
            <div className={styles.card} role="alert" aria-live="polite">
                <p className={styles.eyebrow}>Request failed</p>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.message}>{message}</p>

                {onRetry && (
                    <button
                        type="button"
                        className={styles.button}
                        onClick={onRetry}
                    >
                        Try again
                    </button>
                )}
            </div>
        </section>
    );
};

export default ErrorMessage;
