import pytest
import requests


class TestAPI:
    def test_post_link(self, api_test):
        link = {
            "url": "https://www.youtube.com/",
            "title": "Youtube",
            "categories": ["Video", "Good Video"],
            "authors": [],
            "interestLevel": "9",
            "comment": "Its so good resource!"
        }

        response = requests.post(f"{api_test}/links", json=link)
        assert response.status_code == 200

        response_link = response.json()
        assert response_link.get("message") == "success"

    def test_get_links(self, api_test):
        response = requests.get(f"{api_test}/links")
        assert response.status_code == 200


@pytest.fixture
def api_test():
    return "http://localhost:8080/api/v1"
