export function getExperienceCardCSS() {
    return `
        .experience-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 15px;
            margin: 10px auto;
            width: 100%;
            max-width: 320px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }

        .experience-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        h2 {
            font-size: 18px;
            color: #333;
            margin-bottom: 8px;
        }

        picture {
            width: 100%;
            max-width: 250px;
            height: 150px;
            overflow: hidden;
            border-radius: 5px;
        }

        picture img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        p {
            font-size: 14px;
            color: #555;
            margin: 6px 0;
        }

        .learn-more {
            display: inline-block;
            margin-top: 8px;
            padding: 6px 10px;
            background-color: #007BFF;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            font-size: 13px;
            transition: background 0.2s;
        }

        .learn-more:hover {
            background: #0056b3;
        }
    `;
}
