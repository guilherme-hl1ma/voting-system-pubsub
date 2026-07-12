API_DIR := src/api
FRONTEND_DIR := src/frontend

.PHONY: install-frontend frontend-dev install-api api-dev

# Frontend scripts
install-frontend: $(FRONTEND_DIR)/package-lock.json
	cd $(FRONTEND_DIR) && npm ci

$(FRONTEND_DIR)/package-lock.json: $(FRONTEND_DIR)/package.JSON
	cd $(FRONTEND_DIR) && npm install

frontend-dev: install-frontend
	cd $(FRONTEND_DIR) && npm run dev

# API scripts
install-api: $(API_DIR)/package-lock.json
	cd $(API_DIR) && npm ci

$(API_DIR)/package-lock.json: $(API_DIR)/package.json
	cd $(API_DIR) && npm install

api-dev: install-api
	cd $(API_DIR) && npm run dev
